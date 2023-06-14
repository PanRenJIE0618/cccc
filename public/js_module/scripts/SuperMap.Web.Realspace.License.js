//==========================================================================
// SuperMap Realspace 客户端程序，版权所有，北京超图软件股份有限公司，2000-2009。
// 本程序只能在有效的授权许可下使用。未经许可，不得以任何手段擅自使用或传播。
// 作者：			SuperMap WebClient Team
// 修改：
// 文件名：			SuperMap.Web.Realspace.License
// 功能：			  许可类，查询是否含有许可
// 最后修改时间：
//==========================================================================
Type.registerNamespace('SuperMap.Web.Realspace');

SuperMap.Web.Realspace.License = function(sceneControl) {
    SuperMap.Web.Realspace.License.initializeBase(this);
};


SuperMap.Web.Realspace.License.prototype ={

    /*
     *验证许可：验证是否处于许可状态
     */
    verifyLicense : function() {

        var marker = "verifyLicense" + (new Date()).toGMTString();
        var cmd = {
            func : "verifyLicense",
            classNumber : SuperMap.Web.Realspace.ClassNumber.LICENSE,
            marker
        }

        emitUIInteraction(cmd);

        var promise = new Promise((resolve, reject) => {
            var eventString = 'License' + (new Date()).toGMTString() + Math.random().toFixed(4);

            addResponseEventListener(eventString, (data) => {
                var obj = JSON.parse(data);
                if(obj.marker === marker) {
                    if(obj.Success === 'true') {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                }
            })
        })

        return promise;
    },

    /**
     * 使用许可：传递含ID许可
     */
    sendLicenseId: function(id) {
        var marker = "sendLicenseId" + (new Date()).toGMTString();
        var cmd = {
            func : "sendLicenseId",
            classNumber : SuperMap.Web.Realspace.ClassNumber.LICENSE,
            id,
            marker
        }

        emitUIInteraction(cmd);

        var promise = new Promise((resolve, reject) => {
            var eventString = 'License' + (new Date()).toGMTString() + Math.random().toFixed(4);

            addResponseEventListener(eventString, (data) => {
                if(Number(data) === 0) {
                    resolve(true);
                } else {
                    reject('Failed to Get the Permission!');
                }
            })
        })

        return promise;
    },

    /**
     * 使用临时许可
     */
    sendTempLicense: function() {
        var marker = "sendTempLicense" + (new Date()).toGMTString();
        var cmd = {
            func : "sendTempLicense",
            classNumber : SuperMap.Web.Realspace.ClassNumber.LICENSE,
            marker
        }

        emitUIInteraction(cmd);

        var promise = new Promise((resolve, reject) => {
            var eventString = 'License' + (new Date()).toGMTString() + Math.random().toFixed(4);

            addResponseEventListener(eventString, (data) => {
                if(Number(data) === 0) {
                    resolve(true);
                } else {
                    reject('Failed to Get the Temporary Permission!');
                }
            })
        })

        return promise;
     },

    /** 
     * 登录
     */
    login : function(account, pwd) {
        var marker = "login" + (new Date()).toGMTString();
        var cmd = {
            func : "login",
            classNumber : SuperMap.Web.Realspace.ClassNumber.LICENSE,
            account,
            pwd,
            marker
        }

        emitUIInteraction(cmd);

        var promise = new Promise((resolve, reject) => {
            var eventString = 'License' + (new Date()).toGMTString() + Math.random().toFixed(4);
            var permissionIdsCount = -1;
            var permissionIds = [];

            addResponseEventListener(eventString, (data) => {
                var obj = JSON.parse(data);
                if(obj.Success === 'false') { 
                    reject('Failed to Login');
                }
                if(!isNaN(Number(data))) permissionIdsCount = Number(data);
                if(data.indexOf('ID') > -1) {
                    permissionIds.push(obj);
                    permissionIdsCount--;   
                }
                if(permissionIdsCount === 0) {
                    resolve(permissionIds);
                }
            })
        })

        return promise;
    },

    /**
     * 登出
     */
    logout: function() {
        var marker = "logout" + (new Date()).toGMTString();
        var cmd = {
            func : "logout",
            classNumber : SuperMap.Web.Realspace.ClassNumber.LICENSE,
            marker
        }

        emitUIInteraction(cmd);

        var promise = new Promise((resolve, reject) => {
            var eventString = 'License' + (new Date()).toGMTString() + Math.random().toFixed(4);

            addResponseEventListener(eventString, (data) => {
                var obj = JSON.parse(data);
                if(obj.marker === marker) {
                    if(obj.Success === 'true') {
                        resolve(true);
                    } else {
                        reject(false);
                    }
                }
            })
        })

        return promise;
    }

};
SuperMap.Web.Realspace.License.registerClass('SuperMap.Web.Realspace.License', Sys.Component, Sys.IDisposable);
