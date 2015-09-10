# upload-ssh-key


如果有~/.ssh/id_rsa.pub

    ssh myhost 'mkdir -p .ssh && cat >> ~/.ssh/authorized_keys' < ~/.ssh/id_rsa.pub

如果无，先创建。