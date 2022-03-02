import { Module } from "@nestjs/common";
import { BlockchainService } from "./services/blockchain.service";

@Module({
    imports:[],
    providers:[BlockchainService]
})
export class BlockchainModule{}