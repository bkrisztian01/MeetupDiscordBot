import {
  ApplicationCommandPermissionType,
  CommandInteraction,
  Guild,
  Permissions,
  Snowflake,
} from 'discord.js';
import {
  ApplicationCommandPermissionTypes,
  ChannelTypes,
} from 'discord.js/typings/enums';
import {
  BOTS_ROLE_ID,
  GUEST_HOSTS_ROLE_ID,
  GUILD_ID,
  MODERATOR_ROLE_ID,
  ONBOARDING_ROLE_ID,
  ORGANIZER_ROLE_ID,
} from '../constants';
import { AdminChannel } from './adminchannel';
import { CategoryChannel } from './categoryChannel';
import { Channel } from './channel';
import { ModeratorChannel } from './moderatorchannel';

export class Server {
  channels: Channel[];

  async init(interaction: CommandInteraction) {
    /// ////////////////////////
    // Logs
    // #region
    this.channels.push(
      new CategoryChannel('Logs', [
        {
          deny: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.CONNECT],
          id: GUILD_ID,
          type: 'ROLE',
        },
        {
          allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.CONNECT],
          deny: [Permissions.FLAGS.SEND_MESSAGES],
          id: ORGANIZER_ROLE_ID,
          type: 'ROLE',
        },
        {
          allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.CONNECT],
          deny: [Permissions.FLAGS.SEND_MESSAGES],
          id: MODERATOR_ROLE_ID,
          type: 'ROLE',
        },
        {
          allow: [
            Permissions.FLAGS.VIEW_CHANNEL,
            Permissions.FLAGS.CONNECT,
            Permissions.FLAGS.SEND_MESSAGES,
          ],
          id: BOTS_ROLE_ID,
          type: 'ROLE',
        },
      ])
    );

    this.channels.push(
      new Channel('joins-and-leaves', ChannelTypes.GUILD_TEXT, [], 'Logs')
    );

    this.channels.push(
      new Channel('message-changes', ChannelTypes.GUILD_TEXT, [], 'Logs')
    );

    this.channels.push(
      new Channel('channel-changes', ChannelTypes.GUILD_TEXT, [], 'Logs')
    );

    this.channels.push(
      new Channel('user-changes', ChannelTypes.GUILD_TEXT, [], 'Logs')
    );

    this.channels.push(
      new Channel('invites', ChannelTypes.GUILD_TEXT, [], 'Logs')
    );

    this.channels.push(
      new Channel('moderation', ChannelTypes.GUILD_TEXT, [], 'Logs')
    );
    // #endregion

    /// ///////////////////////////
    // Hosts
    // #region
    this.channels.push(
      new CategoryChannel('Hosts', [
        {
          deny: [Permissions.FLAGS.VIEW_CHANNEL],
          id: GUILD_ID,
          type: 'ROLE',
        },
        {
          allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.CONNECT],
          id: ORGANIZER_ROLE_ID,
          type: 'ROLE',
        },
        {
          allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.CONNECT],
          id: MODERATOR_ROLE_ID,
          type: 'ROLE',
        },
        {
          allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.CONNECT],
          id: GUEST_HOSTS_ROLE_ID,
          type: 'ROLE',
        },
        {
          allow: [Permissions.FLAGS.VIEW_CHANNEL],
          id: BOTS_ROLE_ID,
          type: 'ROLE',
        },
      ])
    );

    this.channels.push(
      new Channel(
        'event-creation-requests',
        ChannelTypes.GUILD_TEXT,
        [],
        'Hosts'
      )
    );

    this.channels.push(
      new Channel('chat', ChannelTypes.GUILD_TEXT, [], 'Hosts')
    );

    this.channels.push(
      new Channel(
        'guide-to-hosting',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [
              Permissions.FLAGS.VIEW_CHANNEL,
              Permissions.FLAGS.SEND_MESSAGES,
            ],
            id: GUILD_ID,
            type: 'ROLE',
          },
        ],
        'Hosts'
      )
    );
    // #endregion

    /// ///////////////////////////
    // Moderation
    // #region
    this.channels.push(new CategoryChannel('Moderation', []));

    this.channels.push(
      new Channel(
        'report-users',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: MODERATOR_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Moderation'
      )
    );

    this.channels.push(
      new Channel(
        'logs',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: MODERATOR_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Moderation'
      )
    );

    this.channels.push(
      new Channel(
        'chat',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: MODERATOR_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Moderation'
      )
    );

    this.channels.push(
      new Channel(
        'guide-to-moderation',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [
              Permissions.FLAGS.VIEW_CHANNEL,
              Permissions.FLAGS.SEND_MESSAGES,
            ],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: MODERATOR_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Moderation'
      )
    );
    // #endregion

    /// ///////////////////////////
    // Information
    // #region
    this.channels.push(
      new CategoryChannel('Information', [
        {
          allow: [Permissions.FLAGS.VIEW_CHANNEL],
          deny: [Permissions.FLAGS.SEND_MESSAGES],
          id: GUILD_ID,
          type: 'ROLE',
        },
      ])
    );

    this.channels.push(
      new Channel(
        'welcome-and-rules',
        ChannelTypes.GUILD_TEXT,
        [],
        'Information'
      )
    );

    this.channels.push(
      new Channel(
        'announcements',
        ChannelTypes.GUILD_TEXT,
        [
          {
            allow: [Permissions.FLAGS.SEND_MESSAGES],
            id: MODERATOR_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Information',
        '📢'
      )
    );

    this.channels.push(
      new Channel(
        'landing-zone',
        ChannelTypes.GUILD_TEXT,
        [
          {
            allow: [
              Permissions.FLAGS.VIEW_CHANNEL,
              Permissions.FLAGS.SEND_MESSAGES,
            ],
            id: GUILD_ID,
            type: 'ROLE',
          },
        ],
        'Information',
        '🏁'
      )
    );

    this.channels.push(
      new Channel(
        'introduction',
        ChannelTypes.GUILD_TEXT,
        [
          {
            allow: [
              Permissions.FLAGS.VIEW_CHANNEL,
              Permissions.FLAGS.SEND_MESSAGES,
            ],
            deny: [Permissions.FLAGS.EMBED_LINKS],
            id: GUILD_ID,
            type: 'ROLE',
          },
        ],
        'Information',
        '👋🏼'
      )
    );

    this.channels.push(
      new Channel(
        'event-feed',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
            id: ONBOARDING_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Information',
        '📃'
      )
    );

    this.channels.push(
      new Channel(
        'how-to-discord',
        ChannelTypes.GUILD_TEXT,
        [
          {
            allow: [Permissions.FLAGS.SEND_MESSAGES],
            id: MODERATOR_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Information',
        '❔'
      )
    );

    this.channels.push(
      new Channel(
        'how-to-contribute',
        ChannelTypes.GUILD_TEXT,
        [
          {
            allow: [Permissions.FLAGS.SEND_MESSAGES],
            id: MODERATOR_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Information',
        '🙏🏼'
      )
    );

    this.channels.push(
      new Channel(
        'bot-commands',
        ChannelTypes.GUILD_TEXT,
        [
          {
            allow: [Permissions.FLAGS.SEND_MESSAGES],
            id: MODERATOR_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Information',
        '🤖'
      )
    );
    // #endregion

    /// ///////////////////////////
    // Discussions // TODO: Roles??
    // #region
    this.channels.push(
      new CategoryChannel('Discussions', [
        {
          deny: [Permissions.FLAGS.VIEW_CHANNEL],
          id: ONBOARDING_ROLE_ID,
          type: 'ROLE',
        },
      ])
    );

    this.channels.push(
      new Channel(
        'join-discussion-channels',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.SEND_MESSAGES],
            id: GUILD_ID,
            type: 'ROLE',
          },
        ],
        'Discussions'
      )
    );

    this.channels.push(
      new Channel(
        'general',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
            id: GUILD_ID,
            type: 'ROLE',
          },
        ],
        'Discussions'
      )
    );

    this.channels.push(
      new Channel(
        'memes',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Discussions',
        '🤡'
      )
    );

    this.channels.push(
      new Channel(
        'aww',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Discussions',
        '🥺'
      )
    );

    this.channels.push(
      new Channel(
        'news',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Discussions',
        '📰'
      )
    );

    this.channels.push(
      new Channel(
        'advice',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Discussions',
        '🆘'
      )
    );

    this.channels.push(
      new Channel(
        'promotions',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Discussions',
        '💁‍♀️'
      )
    );

    this.channels.push(
      new Channel(
        'buy-and-sell',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Discussions',
        '🛒'
      )
    );

    this.channels.push(
      new Channel(
        'traveling',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Discussions',
        '✈️'
      )
    );

    this.channels.push(
      new Channel(
        'pictures',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Discussions',
        '🖼️'
      )
    );
    // #endregion

    /// ///////////////////////////
    // Interests
    // #region
    this.channels.push(
      new CategoryChannel('Interests', [
        {
          deny: [Permissions.FLAGS.VIEW_CHANNEL],
          id: ONBOARDING_ROLE_ID,
          type: 'ROLE',
        },
      ])
    );

    this.channels.push(
      new Channel(
        'join-interest-channels',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.SEND_MESSAGES],
            id: GUILD_ID,
            type: 'ROLE',
          },
        ],
        'Interests'
      )
    );

    this.channels.push(
      new Channel(
        'movies-and-shows',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.SEND_MESSAGES],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Interests',
        '🎥'
      )
    );

    this.channels.push(
      new Channel(
        'books',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.SEND_MESSAGES],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Interests',
        '📚'
      )
    );

    this.channels.push(
      new Channel(
        'music',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.SEND_MESSAGES],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Interests',
        '🎶'
      )
    );

    this.channels.push(
      new Channel(
        'rock-climbing',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.SEND_MESSAGES],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Interests',
        '🧗‍♀️'
      )
    );

    this.channels.push(
      new Channel(
        'football',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.SEND_MESSAGES],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Interests',
        '🏈'
      )
    );

    this.channels.push(
      new Channel(
        'soccer',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.SEND_MESSAGES],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Interests',
        '⚽'
      )
    );

    this.channels.push(
      new Channel(
        'tennis',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.SEND_MESSAGES],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Interests',
        '🎾'
      )
    );

    this.channels.push(
      new Channel(
        'basketball',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.SEND_MESSAGES],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Interests',
        '🏀'
      )
    );

    this.channels.push(
      new Channel(
        'fitness-and-sports',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.SEND_MESSAGES],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Interests',
        '💪🏼'
      )
    );

    this.channels.push(
      new Channel(
        'outdoor-adventures',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.SEND_MESSAGES],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Interests',
        '🏕️'
      )
    );

    this.channels.push(
      new Channel(
        'winter-activities',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.SEND_MESSAGES],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Interests',
        '🏂'
      )
    );

    this.channels.push(
      new Channel(
        'gaming',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.SEND_MESSAGES],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Interests',
        '🎮'
      )
    );

    this.channels.push(
      new Channel(
        'food-and-drinks',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.SEND_MESSAGES],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Interests',
        '🍔'
      )
    );

    this.channels.push(
      new Channel(
        'weeb-world',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.SEND_MESSAGES],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Interests',
        '👺'
      )
    );

    this.channels.push(
      new Channel(
        'board-games',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.SEND_MESSAGES],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Interests',
        '🎲'
      )
    );

    this.channels.push(
      new Channel(
        'cars',
        ChannelTypes.GUILD_TEXT,
        [
          {
            deny: [Permissions.FLAGS.SEND_MESSAGES],
            id: GUILD_ID,
            type: 'ROLE',
          },
          {
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            id: BOTS_ROLE_ID,
            type: 'ROLE',
          },
        ],
        'Interests',
        '🏎'
      )
    );

    // #endregion

    /// ///////////////////////////
    // Voice Channels
    // #region
    this.channels.push(
      new CategoryChannel('Voice Channels', [
        {
          deny: [Permissions.FLAGS.VIEW_CHANNEL],
          id: ONBOARDING_ROLE_ID,
          type: 'ROLE',
        },
      ])
    );

    this.channels.push(
      new Channel(
        'theater-room',
        ChannelTypes.GUILD_VOICE,
        [],
        'Voice Channels'
      )
    );

    this.channels.push(
      new Channel(
        'Chat Room #1',
        ChannelTypes.GUILD_VOICE,
        [],
        'Voice Channels'
      )
    );

    this.channels.push(
      new Channel(
        'Chat Room #2',
        ChannelTypes.GUILD_VOICE,
        [],
        'Voice Channels'
      )
    );

    this.channels.push(
      new Channel(
        'Game Room #1',
        ChannelTypes.GUILD_VOICE,
        [],
        'Voice Channels'
      )
    );

    this.channels.push(
      new Channel(
        'Game Room #2',
        ChannelTypes.GUILD_VOICE,
        [],
        'Voice Channels'
      )
    );

    this.channels.push(
      new Channel('AFK Room', ChannelTypes.GUILD_VOICE, [], 'Voice Channels')
    );
    // #endregion

    await Promise.all(
      this.channels.map(async (channel) => {
        if (
          interaction.guild.channels.cache.find(
            (c) => c.name === channel.fullName
          ) == null
        ) {
          const newChannel = await interaction.guild.channels.create(
            channel.fullName,
            {
              type: channel.type,
              parent: null, // TODO
              permissionOverwrites: channel.permissions.map((permission) => {
                return {
                  id: permission.id,
                  allow: permission.allow,
                  deny: permission.deny,
                };
              }),
            }
          );
        }
      })
    );
  }
}
