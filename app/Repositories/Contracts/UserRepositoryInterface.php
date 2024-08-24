<?php


namespace App\Repositories\Contracts;

interface UserRepositoryInterface
{
    public function all(bool $is_paginate=false);

    public function store(array $data);

    public function update(array $data, $id);

    public function delete($id);

    public function find($id);
    public function findByUUIDOrEmail($id);
}
