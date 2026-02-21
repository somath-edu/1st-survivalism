import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// 모든 페이지에 공통으로 들어가는 상단 바 (Header) 영역
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(), // 좌측 상단: 사이트 이름
    Component.Spacer(),    // 중간 여백: 요소들을 양끝으로 밀어냅니다
    Component.Search(),    // 우측 상단: 검색창
    Component.Darkmode(),  // 다크모드 전환
    // Component.ReaderMode(), // (선택) 리더 모드가 필요하다면 주석(//)을 해제하세요
  ],
  afterBody: [],
  footer: Component.Footer({
    links: {
      // 필요하다면 이곳을 준익몽님의 링크로 바꿀 수 있습니다.
      // GitHub: "https://github.com/somath-edu",
    },
  }),
}

// 개별 글 페이지 레이아웃
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
  // 🌟 핵심: 왼쪽 영역을 완전히 비워 시선 분산을 차단하고 본문을 중앙으로 모읍니다.
  left: [], 
  right: [
    Component.DesktopOnly(Component.TableOfContents()), // 목차만 남겨둠
  ],
}

// 리스트(태그/폴더) 페이지 레이아웃
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  // 리스트 페이지에서도 왼쪽 영역을 비워 일관성을 유지합니다.
  left: [], 
  right: [],
}
