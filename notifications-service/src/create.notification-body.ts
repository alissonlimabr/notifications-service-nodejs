import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty() // <== Não pode ser vazio
  @IsUUID() // <== Ele é um ID (UUID)
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240) //<== Tamanho min e max do content.
  content: string;

  @IsNotEmpty()
  category: string;
}
