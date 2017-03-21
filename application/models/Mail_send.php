<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Mail_send extends CI_Model {

	function __construct()
	{
		parent::__construct();
	}

	/*向用户发送邮件*/
	public function send_mail($user_name, $user_mail)
	{
		$config = array(
			'protocol'  => 'smtp',
			'smtp_host' => 'smtp.163.com',
			'smtp_port' => 25,
			'smtp_user' => 'wangbaolivip@163.com',
			'smtp_pass' => 'Polly1989',
			'mailtype'  => 'html',
			'validate'  => true,
			'priority'  => 1,
			'crlf'      => '\r\n',
			'wordwrap'  => true
		);
		$this->email->initialize($config);
		$this->email->from('wangbaolivip@163.com', '日新网');
		$this->email->to($user_mail);
		$this->email->subject('恭喜您提交申请成功');
		$this->email->message("$user_name 同学,恭喜您提交申请成功！日新网将尽快处理您的报名申请，谢谢您对日新网的支持与热爱！<br /><a href=\"http://www.ecjtu.net\" style=\" text-algin:center; \">回日新网看一看</a>"); 
		
		$this->email->send();	
	}
}
