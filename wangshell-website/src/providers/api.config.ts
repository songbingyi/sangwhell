interface IDictionary<TValue> {
    [id: string]: TValue;
}

let apiConfig: IDictionary<string> = {
    'getClientConfig'           : 'base/client_config/getClientConfig',
    'getDataInfo'               : 'about/info/getDataInfo',
    'getBannerList'             : 'home/banner/getBannerList',
    'getCaseList'               : 'work/case/getCaseList',
    'getCaseDetail'             : 'work/case/getCaseDetail',
    'getCollaborates'           : 'about/info/getCollaborates',
};
export { apiConfig }
