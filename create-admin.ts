
import {DefaultCrudRepository} from '@loopback/repository';
import {User} from './src/models';
import {MysqlDataSource} from './src/datasources';
import {PasswordHasher} from './src/services/hash.password.bcryptjs';
import {inject} from '@loopback/core';
import {passwordHasher } from ';

class CreateAdmin {
    constructor(
      @inject('datasources.mysql') dataSource: MysqlDataSource,
      @inject('services.passwordHasher') passwordHasher: PasswordHasher,
    ) {
      this.userRepository = new DefaultCrudRepository(User, dataSource);
      this.passwordHasher = passwordHasher;
    }
  
    async createAdmin() {
      const adminData = {
        email: 'admin@example.com',
        password: 'adminpassword',
        role: 'admin',
      };
  
      const hashedPassword = await this.passwordHasher.hashPassword(
        adminData.password
      );
  
      const adminUser = new User(adminData);
      adminUser.password = hashedPassword;
  
      await this.userRepository.create(adminUser);
      console.log('Admin user created successfully.');
    }
  }
  