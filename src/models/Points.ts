import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('points')
export default class Points{

        @PrimaryGeneratedColumn('uuid')
        id:string

        @Column()
        image:string;

        @Column()
		name:string;
        
        @Column()
        email:string;

        @Column()    
        whatsapp:String;
        
        @Column()
        latitude:number;
        
        @Column()
        longitude:number;

        @Column()       
        city:string;
        
        @Column({
            length:2
        })
		uf:string;

}