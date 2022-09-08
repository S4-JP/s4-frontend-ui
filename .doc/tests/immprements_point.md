# 実装時のポイント

- できるだけ最小コンポーネントは `props` でロジックを渡せるようにする（ `molecules` コンポーネントではロジックがない状態が理想、`organisms` コンポーネントで `molecules` にロジックを注入する）
- 表示コンポーネント、入出力コンポーネントは可能な限り `data-testid` 属性を付与する
- 大きくなったコンポーネントは本当にそのサイズかを考える（小さいコンポーネントに分ける必要性があるかを考慮）
- ロジックは単体でテストできるようにする（レンダリングを伴うテストはコストが高い）


[戻る](../readme.md)