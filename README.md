# upload-ssh-key

upload ssh key to host

[![npm version](https://badge.fury.io/js/skt.svg)](http://badge.fury.io/js/skt)

## Install

    [sudo]npm install -g skt

## Usage 
 

```
skt deploy@127.57.222.30
```

## 原理

如果有~/.ssh/id_rsa.pub

    ssh myhost 'mkdir -p .ssh && cat >> ~/.ssh/authorized_keys' < ~/.ssh/id_rsa.pub

如果无，先创建。

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.0.0 初始化版本cli,实现skt导出

## 欢迎fork和反馈

- write by `i5ting` shiren1118@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
