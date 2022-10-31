import { Injectable } from '@nestjs/common';
import { EnvironmentEntity, EnvironmentRepository } from '@novu/dal';
import { UpdateSmsSettingsCommand } from './update-sms-settings.command';

@Injectable()
export class UpdateSmsSettings {
  constructor(private environmentRepository: EnvironmentRepository) {}

  async execute(command: UpdateSmsSettingsCommand): Promise<EnvironmentEntity> {
    await this.environmentRepository.update(
      {
        _id: command.environmentId,
      },
      {
        $set: {
          'channels.sms.twilio.accountSid': command.twilio.accountSid,
          'channels.sms.twilio.authToken': command.twilio.authToken,
          'channels.sms.twilio.phoneNumber': command.twilio.phoneNumber,
        },
      }
    );

    return await this.environmentRepository.findById(command.environmentId);
  }
}
