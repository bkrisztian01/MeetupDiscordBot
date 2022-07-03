import { ApplicationCommandPermissionType, Snowflake } from 'discord.js';
import {
  ApplicationCommandPermissionTypes,
  ChannelTypes,
} from 'discord.js/typings/enums';
import { Channel } from './channel';

export class CategoryChannel extends Channel {
  constructor(
    name: string,
    permissions: {
      allow?: bigint[];
      deny?: bigint[];
      id: Snowflake;
      type:
        | ApplicationCommandPermissionType
        | ApplicationCommandPermissionTypes;
    }[]
  ) {
    super(name, ChannelTypes.GUILD_CATEGORY, permissions);
  }
}
