<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Address;
use App\Models\Activity;
class Organization extends Model
{
    use HasFactory;

    public $timestamps = false;

    // Relação com address
    public function address()
    {
        return $this->hasOne(Address::class);
    }

    // Relação com activities
    public function activities()
    {
        return $this->hasMany(Activity::class);
    }
}
