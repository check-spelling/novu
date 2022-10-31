import { IsDefined, ValidateNested } from 'class-validator';
import { EnvironmentWithUserCommand } from '../../../shared/commands/project.command';

class TwilioSettings {
  @IsDefined()
  authToken: string;

  @IsDefined()
  accountSid: string;

  @IsDefined()
  phoneNumber;
}

export class UpdateSmsSettingsCommand extends EnvironmentWithUserCommand {
  @IsDefined()
  @ValidateNested()
  twilio: TwilioSettings;
}
