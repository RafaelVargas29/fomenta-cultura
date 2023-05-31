<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Organization;
use App\Models\Category;

class Activity extends Model
{
    use HasFactory;

    public $timestamps = false;

    // Relação com Organization
    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }

    // Relação com Category
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
