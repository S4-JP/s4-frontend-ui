# 独自モジュールのモック

外部モジュールをモック化する場合と変わらない
```ts
import { AxiosInstance } from 'axios'
import { rest } from '@hooks/rest'

jest.mock('@hooks/rest')
const myRest: jest.Mocked<AxiosInstance> = rest as any
myRest.get.mockImplementation((api) => {
  switch (api) {
    case '/sanctum/csrf-cookie':
      return Promise.resolve({ status: 204 })
    case '/api/me':
      return Promise.resolve({ status: 200, data: Unauthenticated })
  }
})
```

## テストサンプル

@hooks/rest.ts
```ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'

const rest = (() => {
  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ROOT,
    responseType: 'json',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'content-Type': 'application/json',
    },
    withCredentials: true,
    timeout: 30000,
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    },
  })
  return {
    client,

    get: <T = any, R = AxiosResponse<T>>(
      url: string,
      config?: AxiosRequestConfig<any>
    ): Promise<R> => {
      return client.get(url, config)
    },
    post: <T = any, R = AxiosResponse<T>>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig<any>
    ): Promise<R> => {
      return client.post(url, data, config)
    },
    put: <T = any, R = AxiosResponse<T>>(
      url: string,
      data?: FormData,
      config?: AxiosRequestConfig<any>
    ): Promise<R> => {
      return client.put(url, data, config)
    },
    delete: <T = any, R = AxiosResponse<T>>(
      url: string,
      config?: AxiosRequestConfig<any>
    ): Promise<R> => {
      return client.delete(url, config)
    },
  }
})()

export { rest }

```

rest.test.tsx
```ts
import React from 'react'
import { cleanup } from '@testing-library/react-hooks'
import axios from 'axios'
import { rest } from '@hooks/rest'

const mockGet = jest
  .fn()
  .mockImplementation(() => ({ response: { testResponse: 'get' } }))

const mockPost = jest
  .fn()
  .mockResolvedValue({ response: { testResponse: 'post' } })

const mockPut = jest
  .fn()
  .mockResolvedValue({ response: { testResponse: 'put' } })

const mockDelete = jest
  .fn()
  .mockResolvedValue({ response: { testResponse: 'delete' } })

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    create: jest.fn(() => {
      return {
        get: () => mockGet(),
        post: () => mockPost(),
        put: () => mockPut(),
        delete: () => mockDelete(),
      }
    }),
  },
}))

describe('rest - wrapping axios correctly', () => {
  afterEach(cleanup)

  it('rest - functions axios wrapper', async () => {
    const responseGet = await rest.get('http://localhost')
    const responsePost = await rest.post('http://localhost')
    const responsePut = await rest.put('http://localhost')
    const responseDelete = await rest.delete('http://localhost')

    expect(mockGet).toBeCalledTimes(1)
    expect(responseGet).toEqual({ response: { testResponse: 'get' } })

    expect(mockPost).toBeCalledTimes(1)
    expect(responsePost).toEqual({ response: { testResponse: 'post' } })

    expect(mockPut).toBeCalledTimes(1)
    expect(responsePut).toEqual({ response: { testResponse: 'put' } })

    expect(mockDelete).toBeCalledTimes(1)
    expect(responseDelete).toEqual({ response: { testResponse: 'delete' } })
  })
})

```

[戻る](../readme.md)