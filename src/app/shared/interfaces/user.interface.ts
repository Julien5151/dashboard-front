export enum UserAccess {
    internalMember,
    internalTeamLeader,
    internalProjectManager,
    clientMember,
    clientTeamLeader,
    clientProjectManager,
    admin
}

export interface User {
    email: string;
    access: UserAccess;
    token: string;
}
