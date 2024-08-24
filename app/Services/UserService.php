<?php

namespace App\Services;

use App\Repositories\Contracts\UserRepositoryInterface;

class UserService implements UserRepositoryInterface
{

    
    public function store(array $data)
    {
        return $this->store($data);
    }

    public function update(array $data, $id)
    {
        return $this->update($data, $id);
    }

    public function delete($id)
    {
        return $this->delete($id);
    }

    public function all($is_paginate)
    {
        return $this->all($is_paginate);
    }

    public function find($id)
    {
        return $this->find($id);
    }
}