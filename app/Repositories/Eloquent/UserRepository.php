<?php

namespace App\Repositories\Eloquent;

use App\Models\User;
use Illuminate\Support\Str;
use App\Repositories\BaseRepository;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use App\Repositories\Contracts\UserRepositoryInterface;

class UserRepository extends BaseRepository implements UserRepositoryInterface
{
    public function __construct(User $model)
    {
        parent::__construct($model);
    }

    // Implement UserRepositoryInterface methods if needed
    public function all($is_paginate=true)
    {
        $query = request('query');
        $users = $this->model->latest()->with('roles','permissions','country');
    
        if(!empty( $query)){
            $users= $users->where('email', 'like', '%'.$query. '%');
        }
        if(!empty(request('date'))){
            $users= $users->whereDate('created_at', request('date'));
        }
        if($is_paginate){
            $users=$users->paginate(request('per_page') ?? perPage());
        }else {
            $users=$users->get();
        }

        return $users;
    }

    public function store(array $data)
    {
        $request =(object) $data;
        $user_name = !empty($request->user_name) ? $request->user_name : strtolower(trim( $request->first_name." ".$request->first_name)) . rand(10, 1000900);
        $user_name = $this->generateUserName($user_name);
        $new_result= $this->create([
            'name' => $request->first_name." ".$request->first_name,
            'uuid'=>genUUID(),
            'slug' => setSlug( $request->first_name." ".$request->first_name),
            'email' => $request->email,
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'password' => Hash::make($request->password),
            'phone' => $request->phone ?? null,
            'user_name' => $user_name ?? null,
            'thumbnail' => isset($request->thumbnail) ? $request->thumbnail : "default.png",
            'city' => $request->city ?? null,
            'state' => $request->state ?? null, 
            'address' => $request->address ?? null,
            'zip' => $request->zip ?? null,
            'country_id' => $request->country['id'] ?? null,
            'lanuage_id' => $request->lanuage_id ?? null,
            'timezone_id' => $request->timezone_id ?? null,
            'organization' => $request->organization ?? null,
        ]);
        if(!empty( $request->role['id'])){
            // $role = Role::where('id', $request->role['id'])->first();
        //    $new_result->assignRole($role);

        }
        
        event(new Registered($new_result));

        return $new_result;
    }

    public function update($id,array $data)
    {
        $request =(object) $data;
        $update_user= $this->update($id,[
                'name' => $request->first_name." ".$request->first_name,
                'slug' => setSlug( $request->first_name." ".$request->first_name),
                'email' => $request->email,
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'phone' => $request->phone ?? null,
                'thumbnail' => removeUrlFromThumbnail('user',$request->thumbnail),
                'city' => $request->city ?? null,
                'state' => $request->state ?? null, 
                'address' => $request->address ?? null,
                'zip' => $request->zip ?? null,
                'country_id' => $request->country['id'] ?? null,
                'organization' => $request->organization ?? null,
            ]);
            $user=User::where('id', $id)->first();

            // $role = Role::where('id', $request->role['id'])->first();
            // $user->roles()->sync($role);
        return $update_user;
        
    }

    public function delete($id)
    {
      return $this->delete($id);
    }

    public function find($id)
    {
        return $this->find($id);
    }
    public function findByUUIDOrEmail($id){
        return $this->findByUUIDOrEmail($id);
    }

    public function generateUserName($name){
        $username = Str::lower(Str::slug($name));
        if(User::where('user_name', '=', $username)->exists()){
            $username = $this->generateUserName( $username);
            return $username;
        }
        return null;
    }

    public function mapFirstNameLastSlug($request){

        return Str::slug($request->first_name.'-'.$request->last_name, '-');
    }
}
