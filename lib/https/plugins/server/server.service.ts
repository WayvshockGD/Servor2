import Web from "@api/Web";

export = class ServerService {

    async startService() {
        let webAPI = new Web(this, { init: true });

        
    }
}