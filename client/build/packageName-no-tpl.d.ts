/// <reference path="../def/jquery.d.ts" />
/// <reference path="../def/angular.d.ts" />
/// <reference path="../def/angular-ui-router.d.ts" />
declare module overwatch {
}
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
    module git {
        interface IBranch {
            name: string;
            urlName?: string;
        }
        interface IBranchesService {
            getBranches: () => ng.IPromise<IBranch[]>;
            getBranchInfo: (branchName: string) => ng.IPromise<IBranch>;
            getCommits: (branchName: string, username: string) => ng.IPromise<ICommit[]>;
        }
        interface ICommit {
        }
    }
}
declare module overwatch {
    module git {
        interface IBranchesCtrlScope {
            viewModel: IBranchesViewModel;
        }
        interface IBranchesViewModel {
            branches: IBranch[];
        }
    }
}
declare module overwatch {
    module git {
        interface IBranchCtrlScope {
            viewModel: IBranchViewModel;
            filterCommits: () => void;
            commits: ICommit[];
        }
        interface IBranchViewModel {
            branch: IBranch;
            username: any;
        }
    }
}
declare module overwatch {
}
