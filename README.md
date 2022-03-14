# NestJS online course project


`sudo npm i -g @nestjs/cli`  
`nest --version`  
`nest --help`  
`nest new` 

`nest g co` === `nest generate controller`  
`nest generate controller modules/abc --dry-run`  
nest g class coffees/dto/create-coffee.dto --no-spec
npm -i class-validator class-transformer
npm i @nestjs/mapped-types


nest g class events/entities/event.entity --no-spec


npx typeorm migration:create -n CoffeeRefactor
/* RUNNING MIGRATIONS */

/**
 * 💡 Remember 💡
 * You must BUILD your Nest project (so that everything is output to the `/dist/` folder,
 * before a Migration can run, it needs compilated files.
 */
 
// Compile project first 
npm run build

// Run migration(s) 
npx typeorm migration:run

// REVERT migration(s)
npx typeorm migration:revert

// Let TypeOrm generate migrations (for you)
npx typeorm migration:generate -n SchemaSync



{ scope: Scope.TRANSIENT }
@Injectable({ scope: Scope.REQUEST })


// Initial attempt at creating "CONNECTION" provider, and utilizing useValue for values */
{
  provide: 'CONNECTION',
  useValue: createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432
  }),
}

// Creating static register() method on DatabaseModule
export class DatabaseModule {
  static register(options: ConnectionOptions): DynamicModule {  }
}

// Improved Dynamic Module way of creating CONNECTION provider
export class DatabaseModule {
  static register(options: ConnectionOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'CONNECTION', // 👈
          useValue: createConnection(options), 
        }
      ]
    }
  }
}

// Utilizing the dynamic DatabaseModule in another Modules imports: []
imports: [
  DatabaseModule.register({ // 👈 passing in dynamic values
    type: 'postgres',
    host: 'localhost',
    password: 'password',
  })
]