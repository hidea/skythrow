---
permalink: /help/history/
title: "History ／更新履歴"
---

2024.6.21 ver.1.2.2

- Sign-in supports "hosting providers" other than bsky.social
- Improved link card generation for sites configured in non UTF-8 encodings

- サインインでbsky.social以外の「ホスティングプロバイダー」に対応
- UTF-8以外の文字コードで構成されたサイトのリンクカード生成を改善

2024.6.11 ver.1.2.1

- Support for posting only images and hashtags
- Increased timeout when posting
- Improved animation before and after editing images
- Improved color of confirm button for image editing
- Fixed inserting spaces when adding hashtags and handle symbols from shortcuts
- Fixed character limit counting bug
- Fixed a bug that failed to create link cards containing some meta data

- 画像のみ、ハッシュタグのみの投稿に対応
- 投稿時のタイムアウトを緩和
- 画像編集前後のアニメーションを改善
- 画像編集の確定ボタンの色を改善
- ショートカットからハッシュタグ、ハンドル記号を追加する時に空白を挿入するように修正
- 文字制限のカウント不具合を修正
- 一部のmetaデータを含むリンクカードの作成に失敗する不具合を修正

2024.5.28 ver.1.2.0

- Added image editing functionality, clipping, rotation.
- Added "Remember who can reply" so that each account is remembered.
- Also, "Remember posted language" has been changed to remember the language of each account.
- Added "Confirm" to "Return after posting" to confirm whether to after posting.
- Fixed text is not shared when sharing images from other apps.

- 画像の編集機能を追加、クリッピング、回転等ができるようになりました
- 設定に「返信できるユーザーを記憶」を追加、アカウント毎に記憶します
- 合わせて設定の「投稿した言語を記憶」もアカウント毎に言語を記憶するよう変更しました
- 設定の「投稿後はホームに戻る」に「確認する」を追加、投稿後に戻るか確認するようになります
- ハッシュタグ、ハンドルのオートコンプリートをするとテキストカーソルが末尾に移動する問題を修正
- アカウントが未登録でもアプリアイコンの長押しから投稿画面へ行けてしまう問題を修正
- アプリアイコンを改善
- 他のアプリからの画像共有時に付帯するテキストが共有されないことがある問題を改善

2024.5.22 ver.1.1.2

- Fixed ALT text (alternative text) for images was not always set.
- Fixed "Remember posted language" in settings did not work in some cases.
- 画像に設定するALTテキスト（代替テキスト）が設定されないことがあった問題を修正
- 設定の「投稿した言語を記憶」が機能しないことがあった問題を修正

2024.5.19 ver.1.1.1

- Fixed an issue where hashtags written directly in a sentence would not be used.
- Fixed an issue where the cursor moves to the end of a sentence when pasting in the middle of a sentence.
- Fixed an issue where hashtags, handles, and groups with # and @ could be registered.
- Fixed a content warning (labels) issue that was occurring with other Bluesky clients.
- 文章に直接書いたハッシュタグが使ったことにならない問題を修正
- 文章の途中でペーストするとカーソルが末尾に移動してしまう問題を修正
- #、@付きのハッシュタグやハンドル、グループが登録できてしまう問題を修正
- 他のBlueskyクライアントで問題が出ることがあった投稿時のコンテンツの警告（labels）処理を変更

2024.5.16 ver.1.1.0

- iOS ver. released
- Fixed a problem when sharing to other apps
- Fixed a problem when sharing from other apps
- Fixed a problem when sharing from other apps
- Added shortcut for typing # and @
- Support for pasting images and URLs from the clipboard
- Added support for hashtag suggestion
- Support for account switching on the post screen
- Support for color themes for each account
- Support for search and sorting on the tag edit and selection screens

- iOS版、新規リリース
- 他アプリへの共有時の問題を修正
- 他アプリからの共有時の問題を修正
- アルバムからの画像選択枚数制限に対応
- #、@ をタイプするショートカットを追加
- クリップボードからの画像、URL貼り付けに対応
- ハッシュタグのサジェッションに対応
- 投稿画面でのアカウント切り替えに対応
- アカウント毎のカラーテーマに対応
- タグ編集、選択画面での検索、ソートに対応

2024.4.19 ver.1.0.1

- Android ver. released

- Android版、新規リリース