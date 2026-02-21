import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// 1. 최상단 영역 (Header): 검색창과 다크모드를 위로 끌어올립니다.
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.Search(),   // 화면 맨 위에 검색창 고정
    Component.Darkmode(), // 다크모드 버튼 고정
  ],
  afterBody: [],
  footer: Component.Footer({ links: {} }),
}

// 2. 본문 페이지 레이아웃
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  // 3. 왼쪽 영역 (Left): 사이트 이름과 책의 전체 목차(Explorer)를 배치합니다.
  left: [
    Component.PageTitle(), 
    Component.MobileOnly(Component.Spacer()),
    Component.Explorer({ title: "책갈피" }), // 왼쪽 공간을 책의 목차 영역으로 활용
  ],
  // 4. 오른쪽 영역 (Right): 현재 읽는 글의 소제목들만 깔끔하게 보여줍니다.
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
  ],
}

// 5. 리스트 페이지 레이아웃 (위와 동일한 구조 유지)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Explorer({ title: "책갈피" }),
  ],
  right: [],
}
