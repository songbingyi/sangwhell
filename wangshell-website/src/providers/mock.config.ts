interface IDictionary<TValue> {
    [id: string]: TValue;
}

let mockApiConfig: IDictionary<string> = {
    'getClientConfig'           : '01.getClientConfig.json',
    'getDataInfo'               : '02.getDataInfo.json',
    'getBannerList'             : '03.getBannerList.json',
    'getCaseList'               : '04.getCaseList.json',
    'getCaseDetail'             : '05.getCaseDetail.json',
    'getCollaborates'           : '06.getCollaborates.json',
};

export { mockApiConfig };

