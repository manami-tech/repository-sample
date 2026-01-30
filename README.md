# 最小構成のWebアプリケーション

バックエンド(Java)とフロントエンド(React + MUI)を分離した最小構成のサンプルです。

## ディレクトリ構成

```
.
├── backend
└── frontend
```

## 起動方法

### バックエンド

```bash
cd backend
./mvnw spring-boot:run
```

※ Maven Wrapper がない場合は、以下でも起動できます。

```bash
mvn spring-boot:run
```

### フロントエンド

```bash
cd frontend
npm install
npm run dev
```

ブラウザで `http://localhost:5173` を開いてください。

## 画面遷移

1. ログイン
2. 一覧
3. 新規登録
4. 確認
5. 登録完了 → 一覧へ戻る

## セッション情報

ログイン後、`sessionStorage` にユーザー名とログイン時刻を保持します。

## APIエンドポイント例

- 一覧取得
  - `GET http://localhost:8080/api/items`
- 新規登録
  - `POST http://localhost:8080/api/items`
  - リクエスト例:

```json
{
  "name": "テスト",
  "description": "説明"
}
```

レスポンス例:

```json
{
  "id": 1,
  "name": "テスト",
  "description": "説明"
}
```
