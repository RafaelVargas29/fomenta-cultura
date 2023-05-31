<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Organization;

class Address extends Model
{
    use HasFactory;

    public $timestamps = false;

    // Relação com Organization
    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }
}
