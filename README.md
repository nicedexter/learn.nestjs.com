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