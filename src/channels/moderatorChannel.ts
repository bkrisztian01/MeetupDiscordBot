import { Permissions, Snowflake } from 'discord.js';
import { ChannelTypes } from 'discord.js/typings/enums';
import { GUILD_ID, MODERATOR_ROLE_ID } from '../constants';
import { Channel } from './channel';

export class ModeratorChannel extends Channel {
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
          id: MODERATOR_ROLE_ID,
          allow: [
            /* ... */
          ],
          type: 'ROLE',
        },
      ],
      parent
    );
  }
}
