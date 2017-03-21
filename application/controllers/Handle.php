<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Handle extends CI_Controller {
	function __construct()
	{
		parent::__construct();
		$this->load->model('Post_info');
		$this->load->model('Mail_send');
	}

	public function _check()
	{
		$this->form_validation->set_rules('user_name','用户名','trim|required|min_length[2]|max_length[6]|xss_clean');
		$this->form_validation->set_rules('user_sex','性别','required');
		$this->form_validation->set_rules('user_phone','手机','trim|required|numeric|exact_length[11]');
		$this->form_validation->set_rules('user_QQ','QQ','trim|required|numeric|min_length[5]|max_length[10]');
		$this->form_validation->set_rules('user_college','学院','required');
		$this->form_validation->set_rules('user_major','专业','trim|min_length[2]');
		$this->form_validation->set_rules('join_center','中心','required');
		$this->form_validation->set_rules('join_title','部门','required');
		return $this->form_validation->run();
	}

	public function check()
	{
		if($this->_check()==FALSE){
            $this->form_validation->set_error_delimiters('', '');
            $errors = array(
                'status' => '2',
                'result' =>
                array(
                'user_name' => form_error('user_name'),
                'user_sex' => form_error('user_sex'),
                'join_center' => form_error('user_center'),
                'join_title' => form_error('user_department'),
                'user_college' => form_error('user_college'),
                'user_major' => form_error('user_major'),
                'user_phone' => form_error('user_phone'),
                'user_QQ' => form_error('user_QQ')
            )
        );
            echo json_encode($errors);
		}
		else
		{
			if($this->insert_info()==1)
			{
                $success = array(
                    'status' => '1',
                    'result' =>
                    array(
                        'mes' => 'success'
                    )
                );
                echo json_encode($success);
			}
			else
			{
                $failed = array(
                    'status' => '3',
                    'result' =>
                    array(
                        'mes' => 'you have registered'
                    )
                );
                echo json_encode($failed);
			}
		}
	}

	public function insert_info()
	{
		$data = $_POST;
		$user_mail = $data['user_QQ']."@qq.com";
		
		 if($this->Post_info->get_user_id($data['user_name'], $data['user_phone'])==NULL){
			 $this->Post_info->insert_user_info($data);
		 }
		 $user_id = $this->Post_info->get_user_id($data['user_name'], $data['user_phone']);
		 $hr_id   = $this->Post_info->get_hr_id($data['join_center'], $data['join_title']);
		 $data_sign = array(
			'user_id' => $user_id,
			'hr_id'   => $hr_id,
		 );

		 if($this->Post_info->get_hr_user($user_id, $hr_id)==NULL){
		 	$this->Post_info->insert_hr_info($data_sign);
			$this->Mail_send->send_mail($data['user_name'],$user_mail);
			return 1;
		 }
		 else{
			return 0;
		 }
	 }
}
