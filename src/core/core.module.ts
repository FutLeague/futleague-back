import { Module } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import config from "../config";
import ormconfig from "../../ormconfig";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [config.KEY],
            useFactory: (configService: ConfigType<typeof config>) => {
                const { type, username, host, database, password, port } =
                    configService.postgres;
                return {
                    ...ormconfig,
                    type: type as any,
                    host: host,
                    port: port,
                    username: username,
                    password: password,
                    database: database,
                    /*logging: ['query', 'error'], */
                };
            },
        })
    ],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule]
})

export class CoreModule { }