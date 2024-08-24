<?php

namespace App\Services;

use App\Repositories\Contracts\UserRepositoryInterface;

class UserService 
{

    public function __construct(
        protected UserRepositoryInterface $userRepository
    ) {
    }

    
    public function store(array $data)
    {
        return $this->userRepository->store($data);
    }

    public function update($id,array $data)
    {
        return $this->userRepository->update($id,$data);
    }

    public function delete($id)
    {
        return $this->delete($id);
    }

    public function all($is_paginate)
    {
     
        return  $this->userRepository->all((bool)$is_paginate);
    }

    public function find($id)
    {
        return $this->find($id);
    }

    public function findByUUIDOrEmail($val){
        return $this->findByUUIDOrEmail($val);
    }
}