import { Permissions, Snowflake } from 'discord.js';
import { ChannelTypes } from 'discord.js/typings/enums';
import { ADMIN_ROLE_ID, GUILD_ID } from '../constants';
import { Channel } from './channel';

export class AdminChannel extends Channel {
  constructor(
    name: string,
    type: ChannelTypes.GUILD_VOICE | ChannelTypes.GUILD_TEXT,
    parent?: Snowflake
  ) {
    super(
      name,
      type,
      [
        {
          id: GUILD_ID,
          deny: [Permissions.ALL],
          type: 'ROLE',
        },
        {
          id: ADMIN_ROLE_ID,
          allow: [Permissions.ALL],
          type: 'ROLE',
        },
      ],
      parent
    );
  }
}
