import { ApplicationCommandPermissionType, Snowflake } from 'discord.js';
import {
  ApplicationCommandPermissionTypes,
  ChannelTypes,
} from 'discord.js/typings/enums';

export class Channel {
  name: string;

  emoji?: string;

  type:
    | ChannelTypes.GUILD_VOICE
    | ChannelTypes.GUILD_TEXT
    | ChannelTypes.GUILD_CATEGORY;

  permissions: {
    allow?: bigint[];
    deny?: bigint[];
    id: Snowflake;
    type: ApplicationCommandPermissionType | ApplicationCommandPermissionTypes;
  }[];

  isReactionRole: boolean;

  parent?: Snowflake;

  constructor(
    name: string,
    type:
      | ChannelTypes.GUILD_VOICE
      | ChannelTypes.GUILD_TEXT
      | ChannelTypes.GUILD_CATEGORY,
    permissions: {
      allow?: bigint[];
      deny?: bigint[];
      id: Snowflake;
      type:
        | ApplicationCommandPermissionType
        | ApplicationCommandPermissionTypes;
    }[],
    parent?: Snowflake,
    emoji?: string
  ) {
    this.name = name;
    this.type = type;
    this.permissions = permissions;
    this.parent = parent;
    this.parent = emoji;
  }

  get fullName(): string {
    return this.emoji + this.name;
  }
}
