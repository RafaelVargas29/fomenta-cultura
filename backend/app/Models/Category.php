<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Activity;

class Category extends Model
{
    use HasFactory;

    public $timestamps = false;

    // Relação com Activity
    public function activities()
    {
        return $this->hasMany(Activity::class);
    }
}
