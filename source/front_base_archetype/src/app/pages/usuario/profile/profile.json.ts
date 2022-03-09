import { ProfileEntity } from './profile.entity';

export const PROFILES: ProfileEntity[] = [
    {
        creationDate: 1,
        modificationDate: 1,
        userAudit: "Oscar",
        version: 1,
        name: "Oscar",
        description: "Rodríguezaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        active: true,
        permissions: ["1", "2", "3"]
    },
    {
        creationDate: 2,
        modificationDate: 2,
        userAudit: "Fernando",
        version: 2,
        name: "Fernando",
        description: "Cebriánaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        active: false,
        permissions: ["1", "2", "3"]
    }
];