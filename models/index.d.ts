import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AttendanceListMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NotificationListForUsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DomesticHelperMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VisitorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SocietyMemberMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class AttendanceList {
  readonly id: string;
  readonly date?: string | null;
  readonly name?: string | null;
  readonly imageURL?: string | null;
  readonly profession?: string | null;
  readonly phoneNumber?: string | null;
  readonly arrivalTime?: string | null;
  readonly departureTime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<AttendanceList, AttendanceListMetaData>);
  static copyOf(source: AttendanceList, mutator: (draft: MutableModel<AttendanceList, AttendanceListMetaData>) => MutableModel<AttendanceList, AttendanceListMetaData> | void): AttendanceList;
}

export declare class NotificationListForUsers {
  readonly id: string;
  readonly message?: string | null;
  readonly imageURL?: string | null;
  readonly forUser?: string | null;
  readonly date?: string | null;
  readonly time?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<NotificationListForUsers, NotificationListForUsersMetaData>);
  static copyOf(source: NotificationListForUsers, mutator: (draft: MutableModel<NotificationListForUsers, NotificationListForUsersMetaData>) => MutableModel<NotificationListForUsers, NotificationListForUsersMetaData> | void): NotificationListForUsers;
}

export declare class DomesticHelper {
  readonly id: string;
  readonly name?: string | null;
  readonly imageURL?: string | null;
  readonly age?: string | null;
  readonly gender?: string | null;
  readonly profession?: string | null;
  readonly phoneNumber?: string | null;
  readonly address?: string | null;
  readonly availability?: string | null;
  readonly hourlyRate?: string | null;
  readonly aadharNumber?: string | null;
  readonly skills?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<DomesticHelper, DomesticHelperMetaData>);
  static copyOf(source: DomesticHelper, mutator: (draft: MutableModel<DomesticHelper, DomesticHelperMetaData>) => MutableModel<DomesticHelper, DomesticHelperMetaData> | void): DomesticHelper;
}

export declare class Visitor {
  readonly id: string;
  readonly visitorName?: string | null;
  readonly visitorType?: string | null;
  readonly expectedDate?: string | null;
  readonly expectedTime?: string | null;
  readonly allowedBy?: string | null;
  readonly memberPhoneNumber?: string | null;
  readonly approvalStatus?: string | null;
  readonly verifyStatus?: string | null;
  readonly code?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Visitor, VisitorMetaData>);
  static copyOf(source: Visitor, mutator: (draft: MutableModel<Visitor, VisitorMetaData>) => MutableModel<Visitor, VisitorMetaData> | void): Visitor;
}

export declare class SocietyMember {
  readonly id: string;
  readonly name?: string | null;
  readonly emailId?: string | null;
  readonly imageURL?: string | null;
  readonly age?: string | null;
  readonly role?: string | null;
  readonly gender?: string | null;
  readonly phoneNumber?: string | null;
  readonly address?: string | null;
  readonly block?: string | null;
  readonly familyMember?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SocietyMember, SocietyMemberMetaData>);
  static copyOf(source: SocietyMember, mutator: (draft: MutableModel<SocietyMember, SocietyMemberMetaData>) => MutableModel<SocietyMember, SocietyMemberMetaData> | void): SocietyMember;
}