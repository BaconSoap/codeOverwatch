/// <reference path="../def/jquery.d.ts" />
/// <reference path="../def/angular.d.ts" />
/// <reference path="../def/angular-ui-router.d.ts" />
declare module overwatch {
    module overview {
        interface IOverviewCtrlScope {
            viewModel: IOverviewViewModel;
        }
        interface IOverviewViewModel {
        }
    }
}
declare module overwatch {
    module layout {
        interface IPageLayoutCtrlScope {
            viewModel: IPageLayoutViewModel;
        }
        interface IPageLayoutViewModel {
            pageData: ICurrentPageData;
        }
    }
}
declare module overwatch {
    module layout {
        interface IPageDataService {
            currentPageData: ICurrentPageData;
        }
        interface ICurrentPageData {
            pageTitle: string;
        }
    }
}
declare module overwatch {
}
