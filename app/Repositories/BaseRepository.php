<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

abstract class BaseRepository
{
    protected $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }


    public function find($id)
    {
        return $this->model->find($id);
    }
    public function findByUUIDOrEmail($uuidOrEmail)
    {
        return  $this->model->where(function($query) use ($uuidOrEmail) {
            $query->where('uuid', $uuidOrEmail)
                  ->orWhere('email', $uuidOrEmail);
        })->first();;
    }


    public function create(array $data)
    {
        return $this->model->create($data);
    }

    public function update($id, array $data)
    {
        $model = $this->model->find($id);
        if ($model) {
            $model->update($data);
            return $model;
        }
        return null;
    }

    public function delete($id)
    {
        return $this->model->destroy($id);
    }

}