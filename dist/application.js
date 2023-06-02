"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookupApiApplication = void 0;
const tslib_1 = require("tslib");
const boot_1 = require("@loopback/boot");
const rest_explorer_1 = require("@loopback/rest-explorer");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const service_proxy_1 = require("@loopback/service-proxy");
const path_1 = tslib_1.__importDefault(require("path"));
const sequence_1 = require("./sequence");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
const authentication_1 = require("@loopback/authentication");
const datasources_1 = require("./datasources");
const hash_password_bcryptjs_1 = require("./services/hash.password.bcryptjs");
const keys_1 = require("./keys");
class CookupApiApplication extends (0, boot_1.BootMixin)((0, service_proxy_1.ServiceMixin)((0, repository_1.RepositoryMixin)(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // Set up default home page
        this.static('/', path_1.default.join(__dirname, '../public'));
        // Customize @loopback/rest-explorer configuration here
        this.configure(rest_explorer_1.RestExplorerBindings.COMPONENT).to({
            path: '/explorer',
        });
        // Bind password hasher
        this.bind(keys_1.PasswordHasherBindings.PASSWORD_HASHER).toClass(hash_password_bcryptjs_1.BcryptHasher);
        // Bind the rounds for password hashing
        this.bind(keys_1.PasswordHasherBindings.ROUNDS).to(10); // Adjust the value as needed
        // Bind authentication component related elements
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
        this.component(authentication_1.AuthenticationComponent);
        // Mount jwt component
        this.component(authentication_jwt_1.JWTAuthenticationComponent);
        // Bind datasource
        this.dataSource(datasources_1.MysqlDataSource, authentication_jwt_1.UserServiceBindings.DATASOURCE_NAME);
    }
}
exports.CookupApiApplication = CookupApiApplication;
//# sourceMappingURL=application.js.map