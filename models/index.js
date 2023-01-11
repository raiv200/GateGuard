// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AttendanceList, NotificationListForUsers, DomesticHelper, Visitor, SocietyMember } = initSchema(schema);

export {
  AttendanceList,
  NotificationListForUsers,
  DomesticHelper,
  Visitor,
  SocietyMember
};