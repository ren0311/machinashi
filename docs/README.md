# Chapter 1 ワークショップ — AI 伴走テンプレート集

Chapter 1 ワークショップ（Stage 0〜20）の各アウトプットを、AI と一緒に 1 ファイルずつ作っていくテンプレート集。途中で止まっても、ファイルを上から順に進めれば PoC 計画書（Stage 20）まで辿り着けるようになっている。

## ファイルの構成（全 Stage 共通）

1. **AI に貼るプロンプト** — 【 】の部分を自分の内容に置き換えて、AI の新しいチャットに貼る。前の Stage のファイルから「✅ 最終アウトプット」をコピペする箇所がファイル名付きで指定してある
2. **✅ 最終アウトプット** — Stage の最後に AI が全項目を埋めた完成版を出してくれる。それをここに貼り、`[AI補完]` と印が付いた箇所だけ自分の言葉に直す。埋めたファイルが次の Stage のプロンプトの材料になる

## 毎 Stage 共通の 4 ステップ

1. この `workshop/` フォルダを自分の作業フォルダにコピーし、最初に [00_self_profile.md](00_self_profile.md) の**セルフリサーチ**を済ませる（初回のみ）
2. 取り組む Stage のファイルを開き、プロンプトの 【 】 を置き換える（「# 私のセルフ情報」には `00_self_profile.md` の最終アウトプットを毎回貼る）
3. AI（ChatGPT / Gemini / Claude、無料アカウントで OK）の**新しいチャット**に貼って送信し、往復する
4. AI が最後に出す完成版を「✅ 最終アウトプット」に貼り、`[AI補完]` の箇所を自分の言葉に直す → 次の Stage のファイルへ

いまどの Stage にいるか分からない・何に困っているか整理できないときは → [00_ai_mentor_prompt.md](00_ai_mentor_prompt.md) の相談プロンプトで AI メンターに聞ける。

## Stage 一覧とファイル対応

| Stage | ファイル | 成果物 |
| --- | --- | --- |
| 準備 | [00_self_profile.md](00_self_profile.md) | セルフリサーチ（セルフ情報 ＋ イラッの種・N=1 候補の仮説） |
| 0 | [stage00_irritation_list.md](stage00_irritation_list.md) | イラッとリスト 9 項目 |
| 1 | [stage01_sorting_jtbd.md](stage01_sorting_jtbd.md) | ◎○△ 仕分け ＋ JTBD 課題仮説（2 視点） |
| 2 | [stage02_n1_target.md](stage02_n1_target.md) | N=1 プロファイル → ターゲット仮説（STP 5 軸） |
| 3 | [stage03_persona.md](stage03_persona.md) | AI 詳細ペルソナ 7 項目 × 5 人 |
| 3 続き | [stage03b_rq_interview_guide.md](stage03b_rq_interview_guide.md) | RQ ＋ 15 問ガイド ＋ AI 仮想インタビュー 4 件 |
| 4 | [stage04_five_interviews.md](stage04_five_interviews.md) | 5 件比較 ＋ AI が外したこと 3 ＋ ★ 発言 5〜8 |
| 5 | [stage05_vibe1_keyvisual.md](stage05_vibe1_keyvisual.md) | Vibe Time #1 — キービジュアル 1 枚 |
| 6 | [stage06_kj_hmw.md](stage06_kj_hmw.md) | KJ 法 痛みグループ ＋ HMW |
| 7 | [stage07_crazy8s.md](stage07_crazy8s.md) | Crazy 8s 8 案 → Impact × Effort で 1 案 |
| 8 | [stage08_persona_stp.md](stage08_persona_stp.md) | ペルソナ（最初の 1 人/1 社）＋ STP |
| 9 | [stage09_business_position.md](stage09_business_position.md) | お金の流れ 4 役 ＋ 事業の作り方の立ち位置 |
| 10 | [stage10_uvp.md](stage10_uvp.md) | UVP 1 行 |
| 11 | [stage11_lean_canvas.md](stage11_lean_canvas.md) | リーンキャンバス 9 マス ＋ 投資回収 ＋ 弱さ 3 つ |
| 12 | [stage12_elevator_pitch.md](stage12_elevator_pitch.md) | 30 秒ピッチ ＋ 詰まった質問メモ |
| 13 | [stage13_vibe2_lp_hero.md](stage13_vibe2_lp_hero.md) | Vibe Time #2 — LP ヒーローセクション |
| 14 | [stage14_user_story_journey.md](stage14_user_story_journey.md) | US 5 本 ＋ ユースケース ＋ ジャーニー ＋ 最大離脱点 |
| 15 | [stage15_screens_moscow.md](stage15_screens_moscow.md) | 画面一覧 ＋ MoSCoW（Must 3〜5） |
| 16 | [stage16_vibe3_spike.md](stage16_vibe3_spike.md) | Vibe Time #3 — 技術スパイク結果 |
| 17 | [stage17_poc_outline.md](stage17_poc_outline.md) | PoC 計画骨子（不確実性 ＋ 検証 A/B） |
| 18 | [stage18_tech_stack_prompt.md](stage18_tech_stack_prompt.md) | 技術スタック宣言 ＋ 3 段プロンプト |
| 19 | [stage19_validation_points.md](stage19_validation_points.md) | 5 つの問い ＋ 弱さ→検証の割り当て |
| 20 | [stage20_poc_plan.md](stage20_poc_plan.md) | PoC 計画書（最終・講師承認＝予算承認） |

## AI と進めるときの約束（全 Stage 共通）

- **雑な断片で OK だから、出せるだけ自分で出す**（単語・箇条書きでいい）→「これ以上無理」となったら AI が断片から補完して完成させてくれる（`[AI補完]` 印付き）。補完を見て「こういうのを書けばよかったんだ」が分かったら、自分の言葉に直す。出した断片と直した分だけ自分の武器になる
- AI の質問・補完がセルフ情報からズレた設定（別業界・別人・教科書例の題材）になっていたら、その場で「私は〇〇だよ」と訂正する
- **1 プロンプト = 1 Stage**。AI が次の Stage の内容まで先回りして作り始めたら「この Stage で止めて」と返す（各プロンプトに停止指示は入っているが、エージェント型 AI は突破することがある）
- AI 仮想インタビュー・AI ペルソナ由来の **数値** には「⚠ 要検証」ラベルを付けて持ち歩く（Stage 6 で実在の人の発言と照合、Stage 19 で検証計画に入れる）
- インタビュー 5 件のうち **1 件は必ず実在の人とのロールプレイ**（P1）。残り 4 件を AI 仮想で埋める。P1 がないと AI の幻覚を見抜く基準点が作れない
- AI の「分からない」という返答はそのまま記録する（重要なシグナル）
- AI がペルソナ・観察断片に無い情報を答えたら「幻覚」とメモして取り消し線
