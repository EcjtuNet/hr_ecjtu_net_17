<?php

class Post_info extends CI_Model
{
	
	function __construct()
	{
		parent::__construct();
	}

	public function get_hr_user($user_id, $hr_id)
	{
		$this->db->from('hr_user');
		$this->db->where('user_id',$user_id);
		$this->db->where('hr_id',$hr_id);
		$query=$this->db->get()->result();
		return $query;
	}
	
	public function get_user_id($user_name, $user_phone)
	{
		$this->db->select('user_id');
		$this->db->from('user_info');
		$this->db->where('user_name',$user_name);
		$this->db->where('user_phone',$user_phone);
		if($query=$this->db->get()->result()){
			return $query[0]->user_id;
		}
	}
	
	public function get_hr_id($join_center, $join_title)
	{
		$this->db->select('hr_id');
		$this->db->from('hr_info');
		$this->db->where('hr_center',$join_center);
		$this->db->where('hr_department',$join_title);
		if($query=$this->db->get()->result()){
			return $query[0]->hr_id;
		}
	}

	public function insert_user_info($data)
	{
		$info = array(
			'user_name'    => $data['user_name'],
			'user_sex'     => $data['user_sex'],
			'term'         => $data['grade_input'],
			'user_college' => $data['user_college'],
			'user_major'   => $data['user_major'],
			'user_phone'   => $data['user_phone'],
			'user_qq'      => $data['user_QQ']
			);
		$this->db->insert('user_info',$info);
	}
	
	public function insert_hr_info($data_sign)
	{
		date_default_timezone_set(PRC);
		$time = date('Y-m-d h:i:s');
		$info = array(
			'user_id' => $data_sign['user_id'],
			'hr_id'   => $data_sign['hr_id'],
			'register_time'  => $time			
			);
		$this->db->insert('hr_user',$info);
	}
}
