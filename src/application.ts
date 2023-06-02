import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {MySequence} from './sequence';
import { JWTAuthenticationComponent, UserServiceBindings } from '@loopback/authentication-jwt';
import { AuthenticationComponent } from '@loopback/authentication';
import { MysqlDataSource } from './datasources';
import {BcryptHasher} from './services/hash.password.bcryptjs';
import { PasswordHasherBindings } from './keys';
import { ConversionService } from './services/ConversionService';

export {ApplicationConfig};

export class CookupApiApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    
    this.bind('services.ConversionService').toClass(ConversionService);


    // Bind password hasher
    this.bind(PasswordHasherBindings.PASSWORD_HASHER).toClass(BcryptHasher);
    
    // Bind the rounds for password hashing
    this.bind(PasswordHasherBindings.ROUNDS).to(10); // Adjust the value as needed

    // Bind authentication component related elements
    this.component(RestExplorerComponent);

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
    this.component(AuthenticationComponent);
    // Mount jwt component
    this.component(JWTAuthenticationComponent);
    // Bind datasource
    this.dataSource( MysqlDataSource, UserServiceBindings.DATASOURCE_NAME);
  }
}