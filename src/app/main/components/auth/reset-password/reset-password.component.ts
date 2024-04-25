import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/main/api/user';
import { CustomDynamicDialogService } from 'src/app/main/service/custom-dynamic-dialog.service';
import { UserService } from 'src/app/main/service/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  email!: string;

  constructor(private userService: UserService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.email = '';
  }

  resetPassword(): void {
    this.userService.resetPassword(this.email).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'E-mail enviado com sucesso!', life: 5000 });
      }
    })
  }
}
