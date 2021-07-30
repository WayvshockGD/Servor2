import WebError from "lib/https/errors/WebError.component";
import ServerService from "lib/https/plugins/server/server.service";
import { ServiceContext } from "lib/types/context";

export = class Web {
    component: ServerService;
    options: ServiceContext;

    constructor(component: ServerService, options: ServiceContext) {
        if (typeof options.init === "boolean") {

        } else {
            throw WebError.create(["init is not boolean."]);
        }

        this.component = component;
        this.options = options;
    }

    public async run() {
        await this.component.startService();
    }

    createFrame(element: keyof HTMLElementTagNameMap) {
        let doc = document.createElement(element);
    }
}