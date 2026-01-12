---
permalink: /help/release-notes/
title: "Release notes – リリースノート"
---

- 2026.1.13 ver.1.5.2

  - Fixed replies to a thread in history were not correctly added to the original
  - Added account filtering for history
  - Improved sharing failures when sending medias
  - Replaced the loading indicator

  - 履歴のスレッドへの返信がスレッドだと元の履歴に正しく追加されない問題を修正
  - 履歴のアカウント絞り込みを追加
  - 複数メディアなどで失敗することがあった共有を改善
  - ローディングを変更

- 2026.1.3 ver.1.5.0

  - Added support for creating thread posts.
  - Split more than 4 images or long text into threads automatically.
  - Fixed a layout issue in the bottom sheet when editing the reply target.
  - Fixed the transition to the review page.

  - スレッド投稿の作成に対応しました
  - 4 枚を超える複数画像、長文テキストをスレッドに分割することができます
  - 返信対象を編集するボトムシートの表示崩れを修正しました
  - レビューページへの遷移を修正しました

- 2025.12.4 ver.1.4.2

  - Added auto-save feature for draft
  - Enhanced hashtag input support
  - Sharing now includes reply and quote URLs
  - Added iPad compatibility
  - Fixed issue causing app to freeze when changing tag group names
  - Fixed several bugs in posting and sharing functions
  - Improved app internal processing and stability
  - Migrate to atproto.dart v.1.x.x

  - 書きかけの投稿の下書きへの自動保存機能を追加
  - ハッシュタグ入力サポートを強化
  - 共有時に返信や引用の URL が含まれるように
  - iPad に対応
  - タググループ名を変更した際にフリーズする問題を修正
  - 投稿やシェア機能でいくつかの不具合を修正
  - アプリの内部処理や安定性を向上
  - atproto.dart v.1.x.x に対応

- 2025.3.23 ver.1.4.1

  - Video upload 3 minutes and 100MB support
  - Reply limit “Your followers” support
  - Fixed some posts displayed probrem in the quote or history
  - Fixed sp spaces (like U+3000) to be used as hashtag separators
  - Fixed some bugs

  - ビデオのアップロード制限緩和、3 分、100MB に対応
  - リプライ制限「フォローしているユーザー」に対応
  - 一部の投稿の引用、履歴が表示できない不具合を修正
  - 全角空白（U+3000）がハッシュタグの区切りになるよう修正
  - 投稿編集中、他のアプリからの共有が受け取れない問題を修正
  - 投稿編集中、ボトムバーの「アカウント」でキャンセル確認されない問題を修正

- 2025.2.7 ver.1.4.0

  - Added “Drafts”
  - Added “History”
    - Quote or Reply from history
    - Pinned a specific history
  - “Quote” and “Reply” from Bluesky post pasting or sharing
  - Changed some popup menus to bottom sheet
  - Changed emoji font
  - Revamped the overall layout

  - 「下書き」を追加
  - 「履歴」を追加
    - 履歴から引用、返信ができます
    - 特定の履歴をピン留めして固定できる
  - Bluesky の投稿のペースト、共有から「引用」「返信」できるように
  - いくつかのポップアップメニューをボトムシートに変更
  - emoji フォントの変更
  - 全体的なレイアウトの改修

- 2024.12.18 ver.1.3.3

  - Add aspect ratio for image and video displayed official client.
  - Add support content warnings to link card.
  - Improve of recent used hashtags.
  - Fix a typo in setting title.
  - Android: Fix back button devices confirms that the post will be deleted.

  - 公式クライアントで表示される画像、ビデオのアスペクト比情報を付与
  - リンクカードへのコンテンツ警告の付与に対応
  - よく使うハッシュタグの処理を改善
  - 設定画面のタイトルの typo を修正
  - Android: 戻る操作で投稿の破棄を確認するよう修正

- 2024.11.24 ver.1.3.2

  - Supports “Graphic Media” content warning label.
  - Removes Exif that was sometimes added to images.
  - Android: Fixed where the Video review sometimes rotated.

  - コンテンツの警告ラベル「生々しいメディア」に対応
  - 一部画像に付与されることがあった Exif 情報を削除
  - Android: ビデオのレビュー表示が回転することがあった問題を修正

- 2024.10.22 ver.1.3.1

  - Fixed problem with screen going dark when sign-in fails
  - Fixed where posting freezes if link card generation fails
  - Added support for signing in with an account that omits the domain of the hosting provider
  - Added descending order for sorting on hashtag input and edit

  - サインインに失敗すると画面が暗転して操作不能になる問題を修正
  - リンクカード生成に失敗すると投稿がフリーズする問題を修正
  - 一部のリンクカードが文字化けする問題を修正
  - ホスティングプロバイダのドメイン名を省略したアカウントでのサインインに対応
  - ハッシュタグ入力・編集画面でのソートに降順を追加

- 2024.10.17 ver.1.3.0

  - Support video.
  - Support for setting up quoted post.
  - Modified progress indicator when posting.
  - Problem solved where go dark when adding an account that not verified email.
  - Fixed an issue where sometimes failed sharing to other apps on iOS18.

  - ビデオの投稿に対応
  - 引用投稿の設定に対応
  - 投稿時の進行表示を改修
  - 投稿テキストの先頭が全角空白だとカーソル位置がおかしくなる問題が解消
  - メール認証されていないアカウントを追加する時に暗転する問題が解消
  - iOS18 で他アプリへの共有時に誤動作することがあった問題を修正

- 2024.8.6 ver.1.2.3

  - Link card previews are now generated when input URL
  - Fixed link card gen failing for some sites
  - Changed text of confirmation to return to home after posting
  - Added QR code generation to profile in account submenu
  - Added search for recent used hashtags
  - Changed hashtag search to not distinguish between katakana & hiragana
  - Changed close keyboard on touch of tag list during hashtag search
  - Changed UI of bottom sheets and added a done button

  - リンクカードのプレビューを URL 入力時に生成するように
  - 一部サイトのリンクカード生成に失敗する問題を修正
  - 投稿後のホームに戻る確認の文言を変更
  - アカウントのサブメニューにプロフィールへの QR コード生成機能を追加
  - よく使うハッシュタグに検索枠を追加
  - ハッシュタグ検索時にカタカナ・ひらがなを区別しないよう変更
  - ハッシュタグ検索中にタグ一覧のタッチでキーボードを閉じるよう変更
  - 各種ボトムシートの UI を変更して完了ボタンを追加

- 2024.6.21 ver.1.2.2

  - Sign-in supports "hosting providers" other than bsky.social
  - Improved link card generation for sites configured in non UTF-8 encodings

  - サインインで bsky.social 以外の「ホスティングプロバイダー」に対応
  - UTF-8 以外の文字コードで構成されたサイトのリンクカード生成を改善

- 2024.6.11 ver.1.2.1

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
  - 一部の meta データを含むリンクカードの作成に失敗する不具合を修正

- 2024.5.28 ver.1.2.0

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

- 2024.5.22 ver.1.1.2

  - Fixed ALT text (alternative text) for images was not always set.
  - Fixed "Remember posted language" in settings did not work in some cases.

  - 画像に設定する ALT テキスト（代替テキスト）が設定されないことがあった問題を修正
  - 設定の「投稿した言語を記憶」が機能しないことがあった問題を修正

- 2024.5.19 ver.1.1.1

  - Fixed an issue where hashtags written directly in a sentence would not be used.
  - Fixed an issue where the cursor moves to the end of a sentence when pasting in the middle of a sentence.
  - Fixed an issue where hashtags, handles, and groups with # and @ could be registered.
  - Fixed a content warning (labels) issue that was occurring with other Bluesky clients.

  - 文章に直接書いたハッシュタグが使ったことにならない問題を修正
  - 文章の途中でペーストするとカーソルが末尾に移動してしまう問題を修正
  - #、@付きのハッシュタグやハンドル、グループが登録できてしまう問題を修正
  - 他の Bluesky クライアントで問題が出ることがあった投稿時のコンテンツの警告（labels）処理を変更

- 2024.5.16 ver.1.1.0

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

  - iOS 版、新規リリース
  - 他アプリへの共有時の問題を修正
  - 他アプリからの共有時の問題を修正
  - アルバムからの画像選択枚数制限に対応
  - #、@ をタイプするショートカットを追加
  - クリップボードからの画像、URL 貼り付けに対応
  - ハッシュタグのサジェッションに対応
  - 投稿画面でのアカウント切り替えに対応
  - アカウント毎のカラーテーマに対応
  - タグ編集、選択画面での検索、ソートに対応

- 2024.4.19 ver.1.0.1

  - Android ver. released

  - Android 版、新規リリース
