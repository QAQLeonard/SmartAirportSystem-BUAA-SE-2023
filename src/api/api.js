import service from "./service";
//查询可购买机票接口
export function getFlightAble(params) {
    return service({
        method: 'get',
        url: '/flight',
        params
    })
}
//航司航班发布界面获取所有航班信息接口
export function getFlightUnpublished(params) {
    return service({
        method: 'get',
        url: '/flight-unpublished',
        params
    })
}
//机票预订界面搜索接口
export function searchFlightTB(start, dest) {
    return service({
        method: 'get',
        url: `/flight/${start}/${dest}`,
        start,
        dest
    })
}
//航司三个界面搜索航班的接口
export function searchFlightHS(id) {
    return service({
        method: 'get',
        url: `/flight/${id}`,
        id
    })
}


//航司已发布界面获取所有航班信息接口
export function getFlightPublished(params) {
    return service({
        method: 'get',
        url: '/flight-published',
        params
    })
}
//航司回收站界面获取所有界面接口
export function getFlightDeleted(params) {
    return service({
        method: 'get',
        url: '/flight-deleted',
        params
    })
}

//航司回收站界面搜索航班接口
export function searchFlightDeleted(id) {
    return service({
        method: 'get',
        url: `/flight-deleted/${id}`,
        id
    })
}
//航司回收站界面恢复回收站中的航班
export function recoverDeleted(id) {
    return service({
        method: 'put',
        url: `/flight-recover/deletedToUnpublished/${id}`,
        id
    })
}

//航司回收站界面彻底删除航班
export function deleteFlight(id) {
    return service({
        method: 'delete',
        url: `/flight/${id}`,
        id
    })
}


//航班发布界面移动航班到回收站
export function moveUnpublishedToBin(id) {
    return service({
        method: 'put',
        url: `/flight-recover/unpublishedToDeleted/${id}`,
        id
    })
}

//航司已发布界面移动航班到回收站
export function movePublishedToBin(id) {
    return service({
        method:'put',
        url:`/flight-recover/publishedToDeleted/${id}`,
        id
    })
}

//航司航班发布界面发布航班接口
export function publishFlight(id){
    return service({
        method:'put',
        url:`/flight-publish/${id}`,
        id
    })
}
//编辑航班信息
export function editFlight(data)
{
    data = JSON.stringify(data)
    console.log(data)
    return service({
        method:'put',
        url:'/flight',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
//获取用户信息
export function getUserData(id){
    return service({
        method:'get',
        url:`/user/${id}`,//注意，需要在url传参数的不要用单引号，用斜引号，就是你键盘波浪线的那个
        id
    })
}

//在这里调用接口
//获取所有航班信息
export function getAllFlight(params){
    return service({
        method:'get',//这里是你的接口调用方式，get、post、delete、put
        url:'/flight',//这里是你接口的调用路径，你去看星达群里发的接口文档
        params//这里是你传进来的参数
    })
}
//提交商家信息
export function SubmitMerchantApp(data){
    data=JSON.stringify(data);
    console.log(data);
    return service({
        method:'post',
        url:'/merchant',
        headers: {'Content-Type': 'application/json'},
        data:data
    })
}
//提交商家申请记录
export function SubmitMerchantAppForm(data){
    data=JSON.stringify(data);
    console.log(data);
    return service({
        method:'post',
        url:'/merchantApplication',
        headers: {'Content-Type': 'application/json'},
        data:data
    })
}

//注册请求
export function InsertUser(data){
    data=JSON.stringify(data);
    console.log(data);
    return service({
        method:'post',
        url:'/user',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
//获取所有停车位信息
export function getAllParking(params) {
    return service({
        method: 'get',
        url: '/parkingLot',
        params
    })
}


//根据id搜索停车位信息
export function searchParkingTB(id) {
    return service({
        method: 'get',
        url: `/parkingLot/${id}`,
        id
    })
}

export function searchParkingTB1(id,start) {
    return service({
        method: 'get',
        url: `/parkingLot/${id}/${start}`,
        id,
        start 
    })
}

export function updateParking(id,start,finish) {
    console.log()
    return service({
        method: 'put',
        url: `/parkingLot/${id}/${start}/${finish}`,
        id,
        start,
        finish
    })
}

export function PassengerID(params) {
    return service({
        method: 'get',
        url: '/passenger-id',
        params
    })
}

export function MerchantID(params) {
    return service({
        method: 'get',
        url: '/merchant-id',
        params
    })
}

export function UserID(username) {
    return service({
        method: 'get',
        url: `/user/${username}`,
        username
    })
}



//处理事务界面获取所有报修请求接口
export function getrepairrequest(params){
    return service({
        method:'get',
        url:'/repairRequest',
        params
    })
}
//搜索
export function searchrequest(id){
    return service({
        method: 'get',
        url: `/repairRequest/${id}`,
        id
    })
}
//创建请求界面创建报修接口
export function createrepairrequest(data){
    data = JSON.stringify(data)
    console.log(data)
    return service({
        method:'post',
        url:'/repairRequest',
        headers:{'Content-Type': 'application/json'},
        data
    })
}
//删除报修接口
export function moverepairrequest(id){
    return service({
        method: 'delete',
        url: `/repairRequest/${id}`,
        id
    })
}
//编辑报修接口，商家请求
export function editrequest(data){
    data = JSON.stringify(data)
    console.log(data)
    return service({
        method:'put',
        url:'/repairRequest',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
export function editMAC(data){
    data = JSON.stringify(data)
    console.log(data)
    return service({
        method:'put',
        url:'/merchantApplication',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
//查询航班
//27
//增加航班
export function createFlight(data){
    data = JSON.stringify(data)
    console.log(data)
    return service({
        method:'post',
        url:'/flight',
        headers:{'Content-Type': 'application/json'},
        data
    })
}
//删除航班
//71
//修改航班
//106

//获取所有商家请求信息
export function getAllMAC(params){
    return service({
        method:'get',
        url:'/merchantApplication',
        params
    })
}

//得到一个新的FlightId
export function createFID(){
    return service({
        method:'get',
        url:'/flight-id'
    })
}
//得到某日的金额
export function getfinance(date){
    return service({
        method:'get',
        url: `/weekTicketPrice/${date}`,
        date
    })
}
//根据id获取乘客所有的已购买机票
export function getTicketById(id){
    return service({
        method:'get',
        url:`/ticketByPassengerId/${id}`,
        id
    })
}
//根据航班ID获取航班信息
export function getFlightByID(id){
    return service({
        method:'get',
        url:`/flight/${id}`,
        id
    })
}

//得到一个新的RRID
export function createRID(params){
    return service({
        method:'get',
        url:'/repairRequest-id',
        params
    })
}