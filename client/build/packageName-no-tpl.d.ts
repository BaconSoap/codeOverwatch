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
        }
    }
}
declare module overwatch {
    module layout {
        interface IPageDataService {
            data: any;
        }
    }
}
declare module overwatch {
}
