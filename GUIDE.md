# 홈페이지 관리 가이드

- **사이트**: https://hunkyukim.vercel.app
- **관리 화면 (Studio)**: https://hunkyukim.vercel.app/studio

이 문서는 두 부분으로 되어 있습니다.

1. **[작가용] 글과 작품 올리기**: 코드 없이 관리 화면에서 하는 일
2. **[개발자용] 코드 수정과 배포**: 디자인이나 기능을 바꿀 때 하는 일

---

## 1부. [작가용] 글과 작품 올리기

> **배포는 따로 하지 않아도 됩니다.**
> 관리 화면에서 **Publish**를 누르면 **1분 안에** 사이트에 반영됩니다.

### 1. 로그인

1. https://hunkyukim.vercel.app/studio 에 접속합니다.
2. 초대받은 계정(Google, GitHub, 이메일 중 하나)으로 로그인합니다.
   - 처음이라면 관리자에게 초대를 요청하세요. Sanity 관리 페이지 → Members → Invite에서 초대합니다.

왼쪽 메뉴는 세 가지입니다.

| 메뉴 | 내용 | 사이트에서 보이는 곳 |
|---|---|---|
| **Site Settings** | 이름, 부제, 소개 문구, 링크, 이메일 | 헤더, 메인 상단, 푸터, Contact |
| **Exhibitions** | 전시와 작품 사진 | 메인 하단 카드, 전시 상세 페이지 |
| **CV & Press** | 프로필 사진, 학력·레지던시·수상, 전시 이력, 기사 | About, Exhibition 페이지 |

### 2. 저장과 게시 (중요)

- 입력하는 내용은 **자동 저장**되지만, 이 상태는 **초안(Draft)**이라 사이트에는 아직 보이지 않습니다.
- 오른쪽 아래 **Publish** 버튼을 눌러야 사이트에 반영됩니다.
- 반영까지 **최대 1분** 걸립니다. 바로 안 보이면 1분 뒤 새로고침하세요.
- 잘못 고쳤다면 오른쪽 위 시계 아이콘(History)에서 이전 버전으로 되돌릴 수 있습니다.

---

### 3. 새 전시 추가하기

1. 왼쪽 **Exhibitions**를 누르고, 위쪽 **＋** 또는 **Create**를 누릅니다.
2. 기본 정보를 입력합니다.

| 칸 | 입력 예시 | 설명 |
|---|---|---|
| **Title** | `The Prayers` | 전시 제목 |
| **Slug** | **Generate** 버튼 클릭 | 페이지 주소가 됩니다. 예: `/projects/the-prayers` |
| **Year** | `2025` | 전시 연도 |
| **Venue** | `Perrotin, Seoul, South Korea` | 장소 |
| **Type** | Solo Exhibition / Group Exhibition / Art Fair | 하나 이상 선택 |
| **Description** | 프레스 릴리스나 전시 소개글 | **문단 사이는 빈 줄 하나**로 나눕니다 |
| **Installation views** | 전시장 전경 사진 2–4장 | 설명과 작품 사이에 나옵니다. 여러 장을 한꺼번에 끌어다 놓을 수 있습니다 |
| **Installation photo credit** | `Photo: 이름. Courtesy of the artist and Perrotin` | 전시장 사진 아래에 붙는 크레딧. 없으면 비워 둡니다 |

전시장 사진 배치는 장수에 따라 자동으로 바뀝니다. 2장이나 4장은 설명 아래에 2열로 놓입니다. 1장이나 3장일 때는 첫 장이 설명 오른쪽에 놓이고, 나머지는 아래에 2열로 놓입니다. 모든 사진은 같은 크기(화면 절반)로 보입니다. 사진 아래에는 "Installation view, 전시명, 장소, 연도. 크레딧" 한 줄이 붙습니다.

3. **Artworks**에 작품 사진을 올립니다.
   - 컴퓨터에서 사진 **여러 장을 한꺼번에 끌어다 놓을 수 있습니다.**
   - 올린 작품을 하나씩 눌러 정보를 입력합니다.

| 칸 | 입력 예시 | 설명 |
|---|---|---|
| **Title** | `Etomological RER Map` | 작품 제목 (필수) |
| **Year** | `2023` | 제작 연도 |
| **Medium** | `Pigment on silk` | 기본값이 미리 들어가 있습니다 |
| **Dimensions** | `85 × 115 cm` | 크기 |
| **Use as exhibition thumbnail** | 체크 | 메인 하단 전시 카드에 쓰일 작품. 체크하지 않으면 첫 번째 작품이 쓰입니다 |

   - 사이트 캡션은 이렇게 나옵니다: *Etomological RER Map*, 2023, Pigment on silk, 85 × 115 cm
   - **작품 순서**는 왼쪽 손잡이(⋮⋮)를 끌어서 바꿉니다. 이 순서대로 전시 페이지에 나옵니다.

4. **Publish**를 누릅니다. 새 전시는 **목록 맨 위**(사이트에서 가장 앞)에 들어갑니다.
5. **CV 전시 이력에도 추가해 주세요.** 전시를 만들어도 Exhibition 페이지의 이력 목록에는 자동으로 들어가지 않습니다. 아래 7번을 참고하세요.

#### 사진 팁
- JPG나 PNG는 원본 그대로 올리면 됩니다. 사이트가 화면 크기에 맞게 자동으로 줄여서 보여 주므로, 올리는 파일 크기가 사이트 속도를 좌우하지 않습니다.
- **TIFF·PSD처럼 100MB가 넘는 파일은 올라가지 않습니다** (Sanity 업로드 한도 100MB). JPG(품질 85–90%, 긴 변 4000–6000px, 색 공간 sRGB)로 저장해서 올리세요. 이렇게 저장하면 보통 3–8MB입니다.
- Adobe RGB 사진은 웹에서 색이 칙칙하게 보일 수 있으니 sRGB로 바꿔서 저장하세요.
- 작품은 **절대 잘리지 않고** 원래 비율대로 보입니다. 사진 가장자리에 배경(벽, 테이프 자국 등)이 있다면 미리 잘라서 올리세요.
- 파일 이름은 상관없습니다. 작품 정보는 칸에 입력한 내용으로 표시됩니다.

---

### 4. 전시 순서 바꾸기

사이트의 전시 순서(메인 하단 카드, 전시 페이지의 이전/다음 버튼)는 **Studio의 Exhibitions 목록 순서와 같습니다.**

- 왼쪽 **Exhibitions** 목록에서 전시를 **끌어서 위아래로 옮기면** 바로 저장되고, 1분 안에 사이트에 반영됩니다. Publish는 필요 없습니다.
- 새 전시는 맨 위에 자동으로 추가되므로, 최신순을 유지할 때는 따로 옮길 필요가 없습니다.
- 같은 해 전시가 여러 개이거나, 중요한 전시를 앞에 두고 싶을 때 이 방법으로 순서를 정합니다.

---

### 5. 전시나 작품 수정·삭제

- **수정**: Exhibitions에서 전시를 눌러 내용을 고친 뒤 **Publish**.
- **작품 삭제**: 작품 오른쪽 **⋯** 메뉴 → **Remove** → **Publish**.
- **전시 삭제**: 전시를 연 상태에서 Publish 옆 **⌄** 메뉴 → **Delete**.
  - 사이트에서 잠시 숨기기만 하려면 **Unpublish**를 고르세요. 나중에 다시 Publish하면 됩니다.

---

### 6. 메인 상단 대표작 바꾸기

메인 상단에 크게 걸리는 작품은 **Site Settings → Home featured work**에서 바꿉니다.

| 칸 | 설명 |
|---|---|
| **Image** | 대표작 사진. 기존 사진을 누르고 **Replace**로 교체하거나, 전시에 올린 사진 중에서 고르려면 **Select → Browse** |
| **Title / Year / Medium / Dimensions** | 사진 아래 박스에 나오는 작품 정보 |
| **Link to exhibition (optional)** | 사진을 누르면 이동할 전시. 비워 두면 클릭되지 않습니다 |

**Publish**를 누르면 반영됩니다. 링크 미리보기 이미지(카카오톡 등에 링크를 붙였을 때 나오는 그림)도 이 작품으로 바뀝니다.

> 전시에 없는 작품(신작, 소장품 등)도 대표작으로 쓸 수 있습니다.
> Image를 비우면 메인 상단 대표작 영역이 사라집니다.

---

### 7. CV · 전시 이력 · 기사 수정 (CV & Press)

| 칸 | 사이트에서 보이는 곳 |
|---|---|
| **About photo** | About 페이지 사진 |
| **About sections** | About 페이지의 Education, Residencies, Prizes |
| **Exhibition history** | Exhibition 페이지의 Solo Exhibitions, Group Exhibitions |
| **Press** | About 페이지 맨 아래 Press |

각 항목은 **Text**(보이는 글)와 **Link**(선택)로 되어 있습니다.

- **새 항목 추가**: 목록 아래 **Add item**을 누르고, 손잡이(⋮⋮)를 끌어 원하는 위치로 옮깁니다. 최신 항목을 맨 위에 두세요.
- **Link 칸**
  - 기사 같은 외부 사이트: 전체 주소를 넣습니다. 예: `https://www.nytimes.com/...`. 새 탭에서 열립니다.
  - 사이트 안의 전시 페이지: `/projects/` 뒤에 전시의 Slug를 붙입니다. 예: `/projects/pure-war`. 밑줄이 생기고, 누르면 그 전시 페이지로 이동합니다.
- **새 섹션 추가**: About sections 아래 **Add item** → Title에 `Collections` 같은 섹션 이름을 넣고 항목을 추가합니다.

**예시: 새 개인전을 이력에 추가하기**
1. Exhibition history → **Solo Exhibitions** → **Add item**
2. Text: `2025 The Prayers, Perrotin, Seoul`
3. Link: `/projects/the-prayers` (3번에서 만든 전시가 있을 때만)
4. 맨 위로 끌어 올리고 **Publish**

---

### 8. 이름·소개 문구·링크·이메일 (Site Settings)

| 칸 | 사이트에서 보이는 곳 |
|---|---|
| **Name** | 헤더 왼쪽, 링크 미리보기 이미지, 브라우저 탭 제목 |
| **Subtitle** | 헤더 오른쪽 (현재 `Painter`) |
| **Home intro** | 메인 상단 소개 문구 |
| **Home featured work** | 메인 상단 대표작 (위 6번 참고) |
| **Links** | 메인 상단, 푸터, 모바일 메뉴 (현재 Instagram, Perrotin, Artist Talk) |
| **Email / Phone / Address** | Contact 팝업. 비워 두면 표시되지 않습니다 |

---

### 9. 자주 묻는 질문

**Publish했는데 사이트가 그대로예요.**
→ 1분 정도 기다렸다가 새로고침하세요. 그래도 그대로라면 Publish 버튼이 회색(이미 게시됨)인지 확인하세요.

**링크를 공유했는데 미리보기가 예전 그대로예요.**
→ 카카오톡, 페이스북 같은 앱이 미리보기를 따로 저장해 두기 때문입니다. 시간이 지나면 바뀝니다.
- 카카오톡: [카카오 공유 디버거](https://developers.kakao.com/tool/debugger/sharing)에서 주소를 넣고 "캐시 초기화"
- 페이스북: [공유 디버거](https://developers.facebook.com/tools/debug/)에서 "다시 스크랩"

**새 전시 페이지 주소가 404로 나와요.**
→ Slug를 입력했는지(Generate) 확인하고, Publish 후 1분 뒤 다시 열어 보세요.

---

## 2부. [개발자용] 코드 수정과 배포

### 구성

| 역할 | 서비스 | 관리 페이지 |
|---|---|---|
| 코드 | GitHub `jahwanoh/portfolio-hunkyukim` | https://github.com/jahwanoh/portfolio-hunkyukim |
| 호스팅 | Vercel (프로젝트 `hunkyukim`) | https://vercel.com/jahwanohs-projects/hunkyukim |
| 콘텐츠 | Sanity (프로젝트 `t2yxyarl`, dataset `production`) | https://www.sanity.io/manage/project/t2yxyarl |

- 글과 작품을 바꾸는 일 → Sanity만 쓰면 됩니다. **배포 필요 없음.**
- 디자인, 기능, 입력 칸 구성을 바꾸는 일 → 코드 수정 후 GitHub에 push하면 됩니다. **Vercel이 자동으로 배포합니다.**

### 로컬에서 실행

Node.js 22 이상이 필요합니다. pnpm이 설치되어 있지 않으면 `npx pnpm@9`로 실행합니다.

```bash
npx pnpm@9 install   # 처음 한 번
npx pnpm@9 dev       # http://localhost:3000 , 관리 화면은 /studio
npx pnpm@9 build     # 배포 전에 빌드가 되는지 확인
```

로컬에서도 실제 Sanity 데이터를 읽습니다. 로컬 `/studio`에서 Publish하면 **실제 사이트에도 반영되니** 주의하세요.

### 배포

```bash
git add -A
git commit -m "변경 내용"
git push            # main 브랜치에 push하면 Vercel이 자동으로 배포 (1~2분)
```

- 배포 상태는 Vercel 대시보드나 GitHub 커밋 옆 체크 표시에서 확인합니다.
- 배포가 실패해도 이전 버전이 그대로 서비스됩니다. 로그를 확인하고 고친 뒤 다시 push하면 됩니다.
- 되돌리려면 Vercel → Deployments에서 이전 배포를 골라 **Promote to Production**을 누릅니다.

### 주요 파일

| 경로 | 내용 |
|---|---|
| `sanity/schemaTypes/` | 관리 화면의 입력 칸 구성 (`settings.ts`, `exhibition.ts`, `cv.ts`) |
| `sanity/lib/queries.ts` | Sanity에서 데이터를 가져오는 쿼리 (GROQ) |
| `lib/content.ts` | 가져온 데이터를 화면용 형태로 바꾸는 함수, 반영 주기(`REVALIDATE = 60`초) |
| `app/(site)/` | 사이트 페이지 (메인, about, exhibition, projects/[slug]) |
| `app/studio/` | 관리 화면 (`/studio`) |
| `app/opengraph-image.tsx` | 링크 미리보기 이미지 |
| `components/` | 화면 구성 요소 (헤더, 푸터, 작품 캡션 등) |
| `scripts/` | 처음 한 번 쓴 데이터 이전 스크립트. 다시 실행하면 Sanity 내용을 **덮어쓰니 주의** |

**입력 칸을 추가하거나 바꿀 때**에는 세 곳을 함께 고칩니다.
1. `sanity/schemaTypes/`: 입력 칸
2. `sanity/lib/queries.ts`: 쿼리
3. `lib/content.ts`와 해당 컴포넌트: 화면

그다음 push하면 관리 화면도 함께 배포됩니다(사이트 안에 포함되어 있음).

### 도메인을 연결할 때 (예: hunkyukim.com)

1. Vercel → 프로젝트 → Settings → **Domains**에서 도메인을 추가하고, 안내대로 DNS를 설정합니다.
2. 관리 화면이 새 도메인에서 동작하도록 Sanity에 주소를 등록합니다.
   ```bash
   npx sanity login --provider google   # 로그인이 안 되어 있다면
   npx sanity cors add https://hunkyukim.com --credentials
   ```
   Sanity 관리 페이지 → API → CORS origins에서 직접 추가해도 됩니다(**Allow credentials** 체크).
3. 링크 미리보기 이미지 주소는 Vercel의 대표 도메인을 자동으로 따라가므로 따로 고칠 필요가 없습니다.

### 참고

- 버전: Next.js 16, Sanity Studio 6 (`next-sanity` 13).
- 이미지는 Sanity CDN에서 화면 크기별로 줄여서 보내고, 불러오는 동안은 흐린 미리보기가 보입니다.
- `public/images/`는 처음 데이터를 옮길 때 쓴 사본입니다. 지금 사이트는 쓰지 않으므로 지워도 됩니다(이전 스크립트도 같이 지워야 함).
- 원본 사진과 CV 파일(`data/`)은 GitHub에 올리지 않았습니다(`.gitignore`). 작업하던 컴퓨터에만 있습니다.
